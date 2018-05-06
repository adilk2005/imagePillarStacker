(function($){
    $.fn.chineseStacker = function(options){
        var settings = $.extend({
            stackingOrder: null,
            verticalSpacing: 0,
            backgroundImagePath: null
        },options);
        var containerName = this.attr('id');

        // Get all the images given
        var imagesGiven = Array();
        $(this).find("img").each(function() {
            imagesGiven.push($(this).attr("src"));
        });

        var infoToPrintOut = '',
            countingImagesPrinted = 0;
        if (settings.stackingOrder) {
             backgroundImage = '';
            if (settings.backgroundImagePath) {
                 backgroundImage = ' ;background: url(\'' + settings.backgroundImagePath + '\') no-repeat center center fixed; ';
            }

            infoToPrintOut = '<div class="container chineseStacker_backgroundImage" style="' + backgroundImage +'"><div class="row chineseStacker_row-center">';
            for(var i = 0; i < settings.stackingOrder.length; i++) {
                gridsPerColumn = Math.floor((12/settings.stackingOrder.length));

                infoToPrintOut += "<div class='col-md-"+gridsPerColumn+" chineseStacker_vcenter' >";
                for(var stackCounter = 1; stackCounter <= settings.stackingOrder[i]; stackCounter++) {
                    infoToPrintOut += "<div style='height:100%' class='Absolute-Center'><img src='" + imagesGiven[countingImagesPrinted++] + "' style='margin:"+settings.verticalSpacing+"px' /></div>";

                }
                infoToPrintOut += "</div>";
            }
            infoToPrintOut = infoToPrintOut + "</div></div>";
        }
        $("#"+ containerName).html(infoToPrintOut);

        return this;
    }
}(jQuery));