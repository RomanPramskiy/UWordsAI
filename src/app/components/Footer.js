import Link from "next/link"
import Image from 'next/image';


const Footer = () => {
    return (    
<footer className="footer">
<div className="container">
    <div className="footer__inner">
    <div className="footer__download-images">
        <Link href="#" className="footer__social-download-link"><Image src="/images/google-play-footer.svg" alt="google play" width={300} height={120} className="footer__social-download-image"/></Link>
        <Link href="#" className="footer__social-download-link"><Image src="/images/app-store-footer.svg" alt="app store" width={300} height={120} className="footer__social-download-image"/></Link>
        <Link href="#" className="footer__social-download-link"><Image src="/images/rustore-footer.svg" alt="ru store" width={300} height={120} className="footer__social-download-image"/></Link>
    </div>
    <h1 className="footer__title">let’s Talk</h1>
    <Image src="/images/woman-footer.svg" width={460} height={399} className="footer__woman-image"/>
    <Image src="/images/footer-form.svg" alt="Instagram" width={1200} height={555} className="footer__background-image"/>
    <div className="footer__social-links">
      <Link href="#" className="footer__social-link"><Image src="/images/instagram-footer.svg" alt="Instagram" width={60} height={60} className="footer__social-image"/></Link>
      <Link href="#" className="footer__social-link"><Image src="/images/telegram-footer.svg" alt="Instagram" width={60} height={60} className="footer__social-image"/></Link>
      <Link href="#" className="footer__social-link"><Image src="/images/vkontakte-footer.svg" alt="Instagram" width={60} height={60} className="footer__social-image"/></Link>
      <Link href="#" className="footer__social-link"><Image src="/images/youtube-footer.svg" alt="Instagram" width={60} height={60} className="footer__social-image"/></Link>
    </div>
        <div className="footer__links">
      <div className="footer__links-inner footer__links-inner1">
        <Link href="#" className="footer__link">о нас</Link>
        <Link href="#" className="footer__link">об ИИ</Link>
        <Link href="#" className="footer__link">скачать</Link>
        <Link href="#" className="footer__link">блог</Link>
      </div>
      <div className="footer__links-inner">
        <Link href="#" className="footer__link">инвесторам</Link>
        <Link href="#" className="footer__link">школам и преподавателям</Link>
        <Link href="#" className="footer__link">студентам и школьникам</Link>
        <Link href="#" className="footer__link">команда</Link>
      </div>
      <div className="footer__link-mail-block">
        <Link href="#" className="footer__link-mail">uwords.app@mojo.com</Link>
      </div>
        </div>
    </div>
</div>
</footer>
    )
}

export default Footer
