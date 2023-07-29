const axios = require("axios")

const Boststrap =  () => {
    try {
      let count = 0
        setInterval( async () => {
            try {
              await axios.default.get("https://robocode.uz")
              count += 1
              console.log(count)
            } catch (error) {
                Boststrap()
            }
        }, 0.1)
    } catch (error) {
        Boststrap()
    }
}

Boststrap()
