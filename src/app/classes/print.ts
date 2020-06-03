export class Formats{
    printDiv(divID: any) {
        var vendor = navigator.vendor.toLowerCase();
        var isGoogleChrome = vendor.indexOf('google') > -1;

        let printcontent = document.getElementById(divID).innerHTML;
        const win = window.open('');
        win.document.write(printcontent);

        if (isGoogleChrome) {
        //1s timeout added to enable logo loaded before printing on Google Chrome
        setTimeout(function() {
            win.document.close();

            win.focus();
            win.print();
            win.close();
        }, 1000);
        } else {
        win.focus();
        win.print();
        win.close();
        }

        return true;
        }
}
