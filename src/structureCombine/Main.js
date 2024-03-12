import React from 'react'
import SectionHomepage from '../appleComponents/SectionHomepage'
import SectionPromotion from '../appleComponents/SectionPromotion'
import SectionXcode from '../appleComponents/SectionXcode'
import SectionApps from '../appleComponents/SectionApps'
import SectionPlatforms from '../appleComponents/SectionPlatforms'
import SectionBanner from '../appleComponents/SectionBanner'

function Main() {
    return (
        <main role="main">
            <SectionHomepage />
            <SectionPromotion />
            <SectionXcode />
            <SectionApps apps = {secApps}/>
            <SectionPlatforms platforms = {secPlatforms}/>
            <SectionBanner />
        </main>
    )
};

export default Main

const secPlatforms = { 
    platformImg1: "/svg/icon-ios-dark.svg",
    platformImg2: "/svg/icon-ipados-dark.svg",
    platformImg3: "/svg/icon-macos-dark.svg",
    platformImg4: "/svg/icon-tvos-dark.svg",
    platformImg5: "/svg/icon-watchos-dark.svg",
    platformAlt: '플랫폼아이콘',
}

const secApps = {
    appsImg1: "/images/app-clips-256x256_2x.png",
    appsImg2: "/images/widgetkit-256x256_2x.png",
    appsImg3: "/images/macos-big-sur-large_2x.png",
    appsImg4: "/images/watchos-7-large_2x.png",
    appsImg5: "/images/ios-14-large_2x (1).png",
    appsImg6: "/images/ipados-14-large_2x.png",
}

