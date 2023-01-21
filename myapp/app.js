function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", localhost:3000/, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}