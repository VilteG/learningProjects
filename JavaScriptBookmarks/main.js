document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
   
    let siteName = document.getElementById('siteName').value;
    let siteURL = document.getElementById('siteURL').value;

    if(!validateForm(siteName,siteURL)){
        return false;
    }
    
    let bookmark = {
        name: siteName,
        url: siteURL
    }

    if(localStorage.getItem('bookmarks')===null){
        let bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }else{
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

    }
    console.log(bookmark);


    //Clear form:
    document.getElementById('myForm').reset();   
    
    fetchBookmarks();

    e.preventDefault();
}

function deleteBookmark(url){
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));


    // delete item if url matches
    for(i=0; i<bookmarks.length; i++){
        if(bookmarks[i].url == url){
            bookmarks.splice(i, 1);
        }
    }
    // reset local storage
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));    

    //refetch bookmarks  
    fetchBookmarks();
}

function fetchBookmarks(){ 
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    let bookmarksResults = document.getElementById('bookmarksResults');

    bookmarksResults.innerHTML = '';
    for(i=0; i<bookmarks.length; i++){
        let name = bookmarks[i].name;
        let url = bookmarks[i].url;

        bookmarksResults.innerHTML +='<div class= "form-control form-group">'+
                                    '<h3>'+name+
                                    ' <a class="btn btn-primary" target="_blank" href="'+url+'">Visit</a> '+
                                    ' <a onclick= "deleteBookmark(\''+url+'\')" class="btn btn-danger"  href="#">Delete</a> '
                                    '</h3>'+
                                    '<div>';
    }

}

function validateForm(siteName, siteURL){
    if(!siteName || !siteURL){
        alert('Please fill in the form!');
        
        return false;
    }

    let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);

        if(!siteURL.match(regex)){
            alert('please use a valid URL!');

            return false; 
        }

    return true;
}
