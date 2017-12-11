#! /usr/bin/env node
var printer = require('printer');


var list = printer.getPrinters(),
    formats = printer.getSupportedPrintFormats(),
    commands = printer.getSupportedJobCommands();



// console.log(formats);
// console.log(commands);


var printerName = 'Brady IP300 Printer';


// console.log(filename);
// console.log(filenameX);
// console.log(template);

function XMLString(doc){
    return new (XMLSerializer()).serializeToString(doc);
}

function printFile() {
    return printer.printFile(
        {
            filename: filename,
            printer: printerName, // printer name, if missing then will print to default printer
            success: function (jobID) {
                console.log("sent to printer with ID: " + jobID);
            },
            error: function (err) {
                console.log(err);
            }
        })
}

// printFile();

function printRaw() {


    return printer.printDirect(
        {
         data: 'Test Label' // or simple String: "some text"
        ,printer: printerName // printer name, if missing then will print to default printer
        , type: 'TEXT' // type: RAW, TEXT, PDF, JPEG, .. depends on platform
        , success:function(jobID){
            console.log("sent to printer with ID: "+jobID);
        }
        , error:function(err){console.log(err);}
    }
    )
}

printRaw();