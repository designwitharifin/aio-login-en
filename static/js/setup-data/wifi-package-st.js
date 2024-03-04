$(document).ready(function () {
    $.getJSON("/data/data_package_wifi.json", function (data) {
        var wifiCards = "";
        var counter = 0; // Counter variable to track the number of displayed items

        // Looping data load by src /data/data_package_wifi.json
        $.each(data.wifi, function (index, wifi) {

            if (counter >= 2) {
                return false; // Exit the loop if the limit is reached
            }

            // Html for card view data
            wifiCards += `
                <div class="col-lg-6 col-md-6">
                    <div class="card mt__24 card-wifi">
                        <div class="card-body">
                            <div class="label-speed-wifi">${wifi.speed}</div>
                            <div class="wifi-price">${wifi.price}/month</div>
                            <div class="benefit-items d-flex align-items-center">
                                <img src="${wifi.iconBenefit1}" alt="icon" style="width: 16px;">
                                <div class="text-item">${wifi.textBenefit1}</div>
                            </div>
                            <div class="benefit-items d-flex align-items-center">
                                <img src="${wifi.iconBenefit2}" alt="icon-benefit" style="width: 16px;">
                                <div class="text-item">${wifi.textBenefit2}</div>
                            </div>
                            <div class="benefit-items d-flex align-items-center">
                                <img src="${wifi.iconBenefit3}" alt="icon-benefit" style="width: 16px;">
                                <div class="text-item">${wifi.textBenefit3}</div>
                            </div>
                            <div class="benefit-items d-flex align-items-center">
                                <img src="${wifi.iconBenefit4}" alt="icon-benefit" style="width: 16px;">
                                <div class="text-item">${wifi.textBenefit4}</div>
                            </div>
                            <div class="benefit-items d-flex align-items-center">
                                <img src="${wifi.iconBenefit5}" alt="icon-benefit" style="width: 16px;">
                                <div class="text-item">${wifi.textBenefit5}</div>
                            </div>
                            <button class="btn btn-primary btn-sm w-100 mt__16 ripple" data-bs-toggle="modal"
                                data-bs-target="#wifiDetailsModal" onclick="showWifiDetails(${wifi.id})">Start Subscription</button>
                        </div>
                    </div>
                </div>`
                ;

            counter++; // Increment the counter
        });

        $(".wifiCard").html(wifiCards);
    });

    $.getJSON("/data/data_package_wifi.json", function (data) {
        var wifiCardsAll = "";

        // Looping data load by src /data/data_package_wifi.json
        $.each(data.wifi, function (index, wifi) {

            // Html for card view data
            wifiCardsAll += `
                <div class="col-lg-6 col-md-6">
                    <div class="card mt__24 card-wifi">
                        <div class="card-body">
                            <div class="label-speed-wifi">${wifi.speed}</div>
                            <div class="wifi-price">${wifi.price}/month</div>
                            <div class="benefit-items d-flex align-items-center">
                                <img src="${wifi.iconBenefit1}" alt="icon" style="width: 16px;">
                                <div class="text-item">${wifi.textBenefit1}</div>
                            </div>
                            <div class="benefit-items d-flex align-items-center">
                                <img src="${wifi.iconBenefit2}" alt="icon-benefit" style="width: 16px;">
                                <div class="text-item">${wifi.textBenefit2}</div>
                            </div>
                            <div class="benefit-items d-flex align-items-center">
                                <img src="${wifi.iconBenefit3}" alt="icon-benefit" style="width: 16px;">
                                <div class="text-item">${wifi.textBenefit3}</div>
                            </div>
                            <div class="benefit-items d-flex align-items-center">
                                <img src="${wifi.iconBenefit4}" alt="icon-benefit" style="width: 16px;">
                                <div class="text-item">${wifi.textBenefit4}</div>
                            </div>
                            <div class="benefit-items d-flex align-items-center">
                                <img src="${wifi.iconBenefit5}" alt="icon-benefit" style="width: 16px;">
                                <div class="text-item">${wifi.textBenefit5}</div>
                            </div>
                            <button class="btn btn-primary btn-sm w-100 mt__16 ripple" data-bs-toggle="modal"
                                data-bs-target="#wifiDetailsModal" onclick="showWifiDetails(${wifi.id})">Start Subscription</button>
                        </div>
                    </div>
                </div>`
                ;
        });

        $(".wifiCardAll").html(wifiCardsAll);
    });

});

// Show detail data by id
function showWifiDetails(wifiId) {
    $.getJSON("/data/data_package_wifi.json", function (data) {
        var wifi = data.wifi.find(function (item) {
            return item.id === wifiId;
        });
        // var priceString = wifi.price.replace(new RegExp(escapeRegExp(currency) + "|\\.|,", "g"), "");
        // var price = parseInt(priceString, 10);

        // Format the price using a custom function
        // var formattedPrice = formatPrice(price);

        // Set the input value to the 'speed' data
        $("input[name='speed']").val(wifi.speed);
        $("input[name='price']").val(wifi.price);

        $(".speed").text(wifi.speed);
        $(".speedUpto").text(wifi.speedUpTo);
        $(".price").text(wifi.price);
        $(".description").text(wifi.description);
    });
}

// Function to format the price
// function formatPrice(price) {
//     return price.toLocaleString(currencyCountry);
// }

// Function to escape special characters in a string for constructing a regular expression
// function escapeRegExp(string) {
//     return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// }



