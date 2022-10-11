import XeatLogo from "../../images/xeat_logo.png";
import TwitterIcon from "../../images/twitter_icon.svg";
import DiscordIcon from "../../images/discord_icon.svg";
import TelegramIcon from "../../images/telegram_icon.svg";

import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#19083D] py-12 px-5 flex md:flex-row flex-col justify-between md:items-end text-white">
            <div>
                {/* <img src={XeatLogo} alt="logo" className="w-[150px]"/> */}
                <Image src={XeatLogo} alt="pic" width={150} height={80}/>
                <p>Privacy Policy and Terms of Service apply. Created by Xeat team</p>
            </div>

            <div className="flex flex-col items-start md:mt-0 mt-20">
                <div className="flex items-center mb-5">
                    <div className="mx-3">
                        <Image src={TwitterIcon} alt="pic" width={'30px'} height={'30px'}/>
                    </div>
                    <div className="mx-3">
                        <Image src={DiscordIcon} alt="pic" width={'30px'} height={'30px'} />
                    </div>
                    <div className="mx-3">
                        <Image src={TelegramIcon} alt="pic" width={'30px'} height={'30px'}/>
                    </div>
                </div>
                <p>Copyright © 2022 Xeat</p>
            </div>
        </footer>
    );
}

export default Footer;