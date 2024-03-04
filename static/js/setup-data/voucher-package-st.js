$(document).ready(function () {
    $.getJSON("/data/data_voucher.json", function (data) {
        var itemCards = "";
        var counter = 0; // Counter variable to track the number of displayed items

        // Looping data load by src /data/data_voucher.json
        $.each(data.voucher, function (index, voucher) {
            if (counter >= 2) {
                return false; // Exit the loop if the limit is reached
            }

            // Html for card view data
            itemCards += `
                <div class="col-md-6">
                    <div class="card-package">
                        <div class="item-lg mb__14">
                            <a href="#" class="text-decoration-none">
                                <div class="card">
                                    <div class="label">Package for you</div>
                                    <div class="card-body">
                                        <div class="type">Voucher Package</div>
                                        <div class="quota">${voucher.data}</div>
                                        <span class="card-divider">|</span>
                                        <p class="limit">${voucher.limit}</p>
                                        <p class="info-package pb-0">Safe to stream ${voucher.devices} device</p>
                                        <div class="d-flex align-items-center action">
                                            <div class="price">${voucher.total}</div>
                                            <button class="btn btn-primary btn-buy ms-auto ripple" data-bs-toggle="modal" data-bs-target="#voucherDetailsModal" onclick="showVoucherDetails(${voucher.id})">Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>              
                    </div>
                </div>`;

            counter++; // Increment the counter
        });

        $(".voucherCard").html(itemCards);
    });

    $.getJSON("/data/data_voucher.json", function (data) {
        var itemCardsAll = "";

        // Looping data load by src /data/data_voucher.json
        $.each(data.voucher, function (index, voucher) {
            // Html for card view data
            itemCardsAll += `
                <div class="col-md-6">
                    <div class="card-package">
                        <div class="item-lg mb__14">
                            <a href="#" class="text-decoration-none">
                                <div class="card">
                                    <div class="label">Package for you</div>
                                    <div class="card-body">
                                        <div class="type">Voucher Package</div>
                                        <div class="quota">${voucher.data}</div>
                                        <span class="card-divider">|</span>
                                        <p class="limit">${voucher.limit}</p>
                                        <p class="info-package pb-0">Safe to stream ${voucher.devices} device</p>
                                        <div class="d-flex align-items-center action">
                                            <div class="price">${voucher.total}</div>
                                            <button class="btn btn-primary btn-buy ms-auto ripple" data-bs-toggle="modal" data-bs-target="#voucherDetailsModal" onclick="showVoucherDetails(${voucher.id})">Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>              
                    </div>
                </div>
            `;
        });

        $(".voucherCardAll").html(itemCardsAll);
    });

});

// Show detail data by id
function showVoucherDetails(voucherId) {
    $.getJSON("/data/data_voucher.json", function (data) {
        var voucher = data.voucher.find(function (item) {
            return item.id === voucherId;
        });

        $("input[name='total']").val(voucher.total);
        $("input[name='dataValue']").val(voucher.dataValue);
        $("input[name='limit-bytes-total']").val(voucher.limitBytesTotal);
        $("input[name='limit-uptime']").val(voucher.limitUpTime);

        $(".voucherLimit").text(voucher.limit);
        $(".voucherData").text(voucher.data);
        $(".total").text(voucher.total);
        $(".description").text(voucher.description);

    });
}




