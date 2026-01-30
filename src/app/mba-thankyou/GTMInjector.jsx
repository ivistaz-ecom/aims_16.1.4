"use client"

import { useEffect } from "react"

export default function GTMInjector() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Check if GTM is already injected to avoid duplicates
    if (document.getElementById("gtm-script-mba")) return

    // Inject GTM script into head as high as possible
    const script = document.createElement("script")
    script.id = "gtm-script-mba"
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M28ZNRQC');`

    // Insert as high as possible in head (before other scripts)
    const head = document.head || document.getElementsByTagName("head")[0]
    const firstScript = head.querySelector("script")
    if (firstScript) {
      head.insertBefore(script, firstScript)
    } else if (head.firstChild) {
      head.insertBefore(script, head.firstChild)
    } else {
      head.appendChild(script)
    }

    // Load gtag.js for Google Ads conversion tracking
    const loadGtag = () => {
      // Check if gtag is already loaded (might be from root layout)
      if (window.gtag && typeof window.gtag === "function") {
        // gtag is already available, fire conversion event
        window.gtag("event", "conversion", {
          send_to: "AW-17707682486/7XwlCP7o2esbELaV1_tB",
        })
        return
      }

      // Check if gtag script is already being loaded
      if (document.getElementById("gtag-script-mba")) return

      // Load gtag.js
      const gtagScript = document.createElement("script")
      gtagScript.id = "gtag-script-mba"
      gtagScript.async = true
      gtagScript.src =
        "https://www.googletagmanager.com/gtag/js?id=AW-17707682486"

      gtagScript.onload = () => {
        // Initialize dataLayer and gtag function
        window.dataLayer = window.dataLayer || []
        function gtag() {
          window.dataLayer.push(arguments)
        }
        window.gtag = gtag
        gtag("js", new Date())
        gtag("config", "AW-17707682486")

        // Fire conversion event
        gtag("event", "conversion", {
          send_to: "AW-17707682486/7XwlCP7o2esbELaV1_tB",
        })
      }

      // Insert gtag script into head
      head.appendChild(gtagScript)
    }

    // Wait a bit for any existing gtag to load, then load our gtag
    setTimeout(loadGtag, 100)
  }, [])

  return null // This component doesn't render anything
}
