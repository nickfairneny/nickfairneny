function makeMoo()
{
    textarea.style.textTransform = "uppercase"
    var str = textarea.value.split(".");
    var str2 = str.join("-Moo");
    textarea.value = str2;
}

function makeBig()
{
    textarea.style.fontSize="24pt";
    alert("Hello, world!");
}

function fancify()
{

    if(document.getElementById("fancy").checked == true)
    {
        alert("It's about to get fancy in here");
        document.getElementById("boring").checked = false;
        textarea.style.fontSize = "20pt";
        textarea.style.fontFamily = "Brush Script MT";
        textarea.style.color = "pink";
    }
}

function boring()
{
    if(document.getElementById("boring").checked == true)
    {
        alert("Party's over");
        document.getElementById("fancy").checked = false;
        textarea.style.fontSize = "12pt";
        textarea.style.fontFamily = "normal";
        textarea.style.color = "black";
    }
}
