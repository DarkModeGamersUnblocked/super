function getDocHeight(doc) {
    doc = doc || document;
    // stackoverflow.com/questions/1145850/
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    if (height < 330 || height > 640){
    height = 640;
  }
    return height;
  }
  function getDocWidth(doc) {
  doc = doc || document;
  // stackoverflow.com/questions/1145850/
  var body = doc.body, html = doc.documentElement;
  var width = Math.max( body.scrollWidth, body.offsetWidth, 
      html.clientWidth, html.scrollWidth, html.offsetWidth );
  if (width < 393 || width > 1024){
    width = 1024;
  }
  return width;
  
  }
  
  function setIframeHeight(id) {
    var ifrm = document.getElementById(id);
    var doc = ifrm.contentDocument? ifrm.contentDocument: 
        ifrm.contentWindow.document;
    ifrm.style.visibility = 'hidden';
    ifrm.style.height = "10px"; // reset to minimal height ...
    ifrm.style.height = getDocHeight( doc ) + 10 + "px";
    ifrm.style.visibility = 'visible';
  }
  
  function setIframeWidth(id) {
  var ifrm = document.getElementById(id);
    var doc = ifrm.contentDocument? ifrm.contentDocument: 
        ifrm.contentWindow.document;
    ifrm.style.visibility = 'hidden';
    ifrm.style.width = "10px"; // reset to minimal height ...
    ifrm.style.width = getDocWidth( doc ) + 10 + "px";
    ifrm.style.borderStyle = 'solid';
    ifrm.style.borderColor = '#f5f5f5';
    ifrm.style.borderRadius = '20px';
    ifrm.style.borderWidth = '10px';
    ifrm.style.visibility = 'visible';
    ifrm.style.boxShadow = '0 0 10px #f5f5f5';
  }
  
  document.getElementById('gameframe').onload = function() { // Adjust the Id accordingly
    setIframeHeight(this.id);
    setIframeWidth(this.id);
  }