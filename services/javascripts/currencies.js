var Currency = {
    rates: {
        "USD": 1.0,
        "EUR": 1.13726,
        "GBP": 1.32683,
        "CAD": 0.722301,
        "ARS": 0.000879808,
        "AUD": 0.638959,
        "BRL": 0.172133,
        "CLP": 0.0010335,
        "CNY": 0.136998,
        "CYP": 0.397899,
        "CZK": 0.0453862,
        "DKK": 0.152313,
        "EEK": 0.0706676,
        "HKD": 0.128813,
        "HUF": 0.0027858,
        "ISK": 0.00783773,
        "INR": 0.0117109,
        "JMD": 0.00633621,
        "JPY": 0.00702513,
        "LVL": 1.57329,
        "LTL": 0.320236,
        "MTL": 0.293496,
        "MXN": 0.0507538,
        "NZD": 0.597155,
        "NOK": 0.0955269,
        "PLN": 0.265741,
        "SGD": 0.763033,
        "SKK": 21.5517,
        "SIT": 175.439,
        "ZAR": 0.0531559,
        "KRW": 0.000704991,
        "SEK": 0.103964,
        "CHF": 1.22097,
        "TWD": 0.0307456,
        "UYU": 0.023677,
        "MYR": 0.226899,
        "BSD": 1.0,
        "CRC": 0.00198983,
        "RON": 0.228448,
        "PHP": 0.0176278,
        "AED": 0.272294,
        "VEB": 1.2368e-10,
        "IDR": 5.93299e-05,
        "TRY": 0.0262676,
        "THB": 0.0299824,
        "TTD": 0.147305,
        "ILS": 0.271301,
        "SYP": 7.69082e-05,
        "XCD": 0.369485,
        "COP": 0.000232039,
        "RUB": 0.0121953,
        "HRK": 0.150941,
        "KZT": 0.00191069,
        "TZS": 0.000372558,
        "XPT": 972.995,
        "SAR": 0.266667,
        "NIO": 0.0271816,
        "LAK": 4.62622e-05,
        "OMR": 2.5973,
        "AMD": 0.00256771,
        "CDF": 0.000344942,
        "KPW": 0.00111101,
        "SPL": 6.0,
        "KES": 0.00771328,
        "ZWD": 0.00276319,
        "KHR": 0.00024984,
        "MVR": 0.064751,
        "GTQ": 0.129871,
        "BZD": 0.496135,
        "BYR": 3.05738e-05,
        "LYD": 0.182787,
        "DZD": 0.00754334,
        "BIF": 0.000337465,
        "GIP": 1.32683,
        "BOB": 0.144686,
        "XOF": 0.00173374,
        "STD": 4.6065e-05,
        "NGN": 0.000624074,
        "PGK": 0.241979,
        "ERN": 0.0666667,
        "MWK": 0.000576646,
        "CUP": 0.0417366,
        "GMD": 0.0138378,
        "CVE": 0.0103134,
        "BTN": 0.0117109,
        "XAF": 0.00173374,
        "UGX": 0.00027286,
        "MAD": 0.107797,
        "MNT": 0.000282109,
        "LSL": 0.0531559,
        "XAG": 32.5591,
        "TOP": 0.41632,
        "SHP": 1.32683,
        "RSD": 0.00970086,
        "HTG": 0.00762205,
        "MGA": 0.000219766,
        "MZN": 0.0156857,
        "FKP": 1.32683,
        "BWP": 0.0726444,
        "HNL": 0.0386469,
        "PYG": 0.00012483,
        "JEP": 1.32683,
        "EGP": 0.0195596,
        "LBP": 1.113e-05,
        "ANG": 0.554861,
        "WST": 0.359152,
        "TVD": 0.638959,
        "GYD": 0.00478136,
        "GGP": 1.32683,
        "NPR": 0.00731586,
        "KMF": 0.00231166,
        "IRR": 2.37284e-05,
        "XPD": 965.534,
        "SRD": 0.0272023,
        "TMM": 5.71523e-05,
        "SZL": 0.0531559,
        "MOP": 0.125062,
        "BMD": 1.0,
        "XPF": 0.00953025,
        "ETB": 0.00752026,
        "JOD": 1.41044,
        "MDL": 0.0578568,
        "MRO": 0.00252325,
        "YER": 0.004077,
        "BAM": 0.581473,
        "AWG": 0.558659,
        "PEN": 0.267039,
        "VEF": 1.23701e-07,
        "SLL": 4.39519e-05,
        "KYD": 1.20602,
        "AOA": 0.00108863,
        "TND": 0.334697,
        "TJS": 0.0931615,
        "SCR": 0.069617,
        "LKR": 0.0033455,
        "DJF": 0.00561958,
        "GNF": 0.000115446,
        "VUV": 0.00821998,
        "SDG": 0.00166616,
        "IMP": 1.32683,
        "GEL": 0.364091,
        "FJD": 0.437782,
        "DOP": 0.016618,
        "XDR": 1.35424,
        "MUR": 0.0222061,
        "MMK": 0.000476268,
        "LRD": 0.00500626,
        "BBD": 0.5,
        "ZMK": 3.51077e-05,
        "XAU": 3328.04,
        "VND": 3.86705e-05,
        "UAH": 0.0241509,
        "TMT": 0.285762,
        "IQD": 0.000763742,
        "BGN": 0.581473,
        "KGS": 0.0114358,
        "RWF": 0.000707101,
        "BHD": 2.65957,
        "UZS": 7.70871e-05,
        "PKR": 0.00356429,
        "MKD": 0.0184686,
        "AFN": 0.0138865,
        "NAD": 0.0531559,
        "BDT": 0.00822613,
        "AZN": 0.588236,
        "SOS": 0.00175441,
        "QAR": 0.274725,
        "PAB": 1.0,
        "CUC": 1.0,
        "SVC": 0.114286,
        "SBD": 0.117579,
        "ALL": 0.0114746,
        "BND": 0.763033,
        "KWD": 3.25864,
        "GHS": 0.0646713,
        "ZMW": 0.0351077,
        "XBT": 83663.0,
        "NTD": 0.0337206,
        "BYN": 0.305738,
        "CNH": 0.13696,
        "MRU": 0.0252325,
        "STN": 0.046065,
        "VES": 0.0123701,
        "MXV": 0.425303,
        "VED": 0.0123701,
        "SLE": 0.0439519,
        "XCG": 0.554861
    },
    convert: function(amount, from, to) {
        return (amount * this.rates[from]) / this.rates[to];
    }
};