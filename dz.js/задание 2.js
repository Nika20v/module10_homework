let x = '5';
if (typeof x == 'number' && ! isNaN(x)) {
    console.log ("x=числу");
} else if (typeof x == 'string'){
    console.log ("x=строке");
} else if (typeof x == 'boolean'){
    console.log ("x=логика");
} else {
    console.log ("x=не определен");
}
