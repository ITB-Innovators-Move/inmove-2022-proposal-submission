function redirect() {
    window.location.href = "success.html"
}

function postToGoogle() {
    const NamaTim = $("#NamaTim").val()
    const NamaKetua = $("#NamaKetua").val()
    const NoTelpKetua = $("#NoTelpKetua").val()
    const IDLineKetua = $("#IDLineKetua").val()
    const LinkGoogleDrive = $("#LinkGoogleDrive").val()

    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScdUGcr-5MX4-Cm2OKrZU72NRpH3w8duRUb5M3I3fnNiJB3eQ/formResponse",
        data: {
            "entry.506117415": NamaTim,
            "entry.478693612": NamaKetua,
            "entry.244960704": NoTelpKetua,
            "entry.2006212466": IDLineKetua,
            "entry.101853910": LinkGoogleDrive
        },
        type: "POST",
        dataType: "xml",
        success: (d) => {
            $("#registration").trigger("reset")
        },
        error: (x, y, z) => {
            $("#registration").trigger("reset")
        },
        complete: (d) => {
            redirect()
        }
    })
    
    return false
}