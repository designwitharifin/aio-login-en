// ---------------------------------------------------------------------------------------------
/* USER AREA!
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Attention: Please note the symbols in this code: 🔧
* ❌ = This code should not be changed.
* ⚠️ = Dangerous areas, it is recommended that you do not change the region code if you do not 
        understand it.
*-----------------------------------------------------------------------------------------------


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please read and config before start
* Logo settings 🔧 
*-----------------------------------------------------------------------------------------------
* Please changes with your logo
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var newFavicon = "favicon-16x16.png";
// var newThemeColor = "#01BAEE";
var logo = "static/img/brand/aio-logo-color.png";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please read and config before start
* WhatsApp config here 🔧 
*-----------------------------------------------------------------------------------------------
* Please changes with your data like :
* -> whatsAppNumber(Required)
* -> voucherHeder(Optional)
* -> listrikHeader(Optional)
* -> pulsaHeader(Optional)
* -> pdamHeader(Optional)
* -> introWa(Optional) in menu chat -> Text intro in chat menu
* -> noteUserOrder(Optional) -> This is view in detail product like detail voucher etc.
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var whatsAppNumber = "6282293449024";
var voucherHeader = "ORDER: *Voucher*";
var introWa = "Halo kak";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please read and config before start
* Currency config here, please select which one.
* according to your country. you just copy your currency symbol into the var field.
* var currency = "REPLACE_WITH_YOUR_CYRRENCY";  🔧 
*-----------------------------------------------------------------------------------------------
* Please change to your country's currency, select a currency with the same symbol as your 
* country if your country's time zone does not support it.
*
* Currency Symbols
*----------------------
* Symbol meaning :
*  ⚠️ = Unvalidated
*  ❌ = Not Support
*  ✔️ = Support
*
* ar-SA (Arabic - Saudi Arabia): ﷼ (SAR)⚠️
* bn-BD (Bangla - Bangladesh): ৳ (BDT)❌
* bn-IN (Bangla - India): ₹ (INR)⚠️
* cs-CZ (Czech - Czech Republic): Kč (CZK)⚠️
* da-DK (Danish - Denmark): kr (DKK) ✔️
* de-AT (Austrian German): € (EUR)⚠️
* de-CH (Swiss German): CHF (CHF)⚠️
* de-DE (Standard German - Germany): € (EUR)✔️
* el-GR (Modern Greek): € (EUR)✔️
* en-AU (Australian English): $ (AUD)✔️
* en-CA (Canadian English): $ (CAD)✔️
* en-GB (British English): £ (GBP)✔️
* en-IE (Irish English): € (EUR)✔️
* en-IN (Indian English): ₹ (INR)✔️
* en-NZ (New Zealand English): $ (NZD)✔️
* en-US (US English): $ (USD)✔️
* en-ZA (English - South Africa): R (ZAR)❌
* es-AR (Argentine Spanish): $ (ARS)✔️
* es-CL (Chilean Spanish): $ (CLP)✔️
* es-CO (Colombian Spanish): $ (COP)✔️
* es-ES (Castilian Spanish - Spain): € (EUR)✔️
* es-MX (Mexican Spanish): $ (MXN)✔️
* es-US (American Spanish): $ (USD)✔️
* fi-FI (Finnish - Finland): € (EUR)❌
* fr-BE (Belgian French): € (EUR)❌
* fr-CA (Canadian French): $ (CAD)❌
* fr-CH (Swiss French): CHF (CHF)❌
* fr-FR (Standard French - France): € (EUR)❌
* he-IL (Hebrew - Israel): ₪ (ILS)✔️
* hi-IN (Hindi - India): ₹ (INR)✔️
* hu-HU (Hungarian - Hungary): Ft (HUF)❌
* id-ID (Indonesian - Indonesia): Rp (IDR)✔️
* it-CH (Swiss Italian): CHF (CHF)❌
* it-IT (Standard Italian - Italy): € (EUR)✔️
* ja-JP (Japanese - Japan): ¥ (JPY)✔️
* ko-KR (Korean - Republic of Korea): ₩ (KRW)✔️
* nl-BE (Belgian Dutch): € (EUR)✔️
* nl-NL (Standard Dutch - Netherlands): € (EUR)✔️
* no-NO (Norwegian - Norway): kr (NOK)❌
* pl-PL (Polish - Poland): zł (PLN)❌
* pt-BR (Brazilian Portuguese): R$ (BRL)✔️
* pt-PT (European Portuguese - Portugal): € (EUR)✔️
* ro-RO (Romanian - Romania): lei (RON)✔️
* ru-RU (Russian - Russian Federation): ₽ (RUB)❌
* sk-SK (Slovak - Slovakia): € (EUR)❌
* sv-SE (Swedish - Sweden): kr (SEK)❌
* ta-IN (Indian Tamil): ₹ (INR)✔️
* ta-LK (Sri Lankan Tamil): රු (LKR)✔️
* th-TH (Thai - Thailand): ฿ (THB)✔️
* tr-TR (Turkish - Turkey): ₺ (TRY)✔️
* zh-CN (Mainland China - simplified characters): ¥ (CNY)✔️
* zh-HK (Hong Kong - traditional characters): HK$ (HKD)✔️
* zh-TW (Taiwan - traditional characters): NT$ (TWD)✔️
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


// Indonesia Currency
// var currency = "$";
// var currencyCountry = "en-US";


// DANGER AREA!//❌

// Update favicon
$("#favicon").attr("href", newFavicon);

// Update theme color
// $("#themeColor").attr("content", newThemeColor);

// Update logo
$(".logo").attr("src", logo);


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please changes with your url app Apps Script⚠️
*-----------------------------------------------------------------------------------------------
* Function for setup url App Script
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Get a reference to the form elements by their IDs
var formRegisterWifi = document.getElementById("urlAppsScript");
var formRegisterAccount = document.getElementById("urlRegisterAccount");

// Link URL callBack for google sheets and login, please replace with your URL
if (formRegisterWifi) {
        formRegisterWifi.action = "https://script.google.com/macros/s/AKfycbwkNRfwpTgU00RDK-ZqhyrXe2bGslz9dDLbMZR3zjmQR1VOa57TLgp4TQZ_vn1Ic3Gt9g/exec";
}

if (formRegisterAccount) {
        formRegisterAccount.action = "https://aio.pondenet.biz.id/login.php";
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please It is recommended to change this line of code if you do not understand it ⚠️
*-----------------------------------------------------------------------------------------------
* Function for redirect to whatsApp 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
function redirectToWhatsApp() {
        var phoneNumber = whatsAppNumber;
        var message = encodeURIComponent(introWa);

        window.location.href = 'https://wa.me/' + phoneNumber + '?text=' + message;
}




