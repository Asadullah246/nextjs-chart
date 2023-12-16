import classNames from "classnames";
import ArrowLeft from "public/icons/arrowLeft.svg";
import ArrowRight from "public/icons/arrowRight.svg";
import Book from "public/icons/book.svg";
import BulbFilled from "public/icons/bulbFilled.svg";
import ChartUp from "public/icons/chartUp.svg";
import ChevronDown from "public/icons/chevronDown.svg";
import ChevronLeft from "public/icons/chevronLeft.svg";
import ChevronRight from "public/icons/chevronRight.svg";
import ChevronUp from "public/icons/chevronUp.svg";
import Close from "public/icons/close.svg";
import CloseCircle from "public/icons/closeCircle.svg";
import CoinStack from "public/icons/coinStack.svg";
import CustomerSupport from "public/icons/customerSupport.svg";
import Download from "public/icons/download.svg";
import Email from "public/icons/email.svg";
import EnvCare from "public/icons/envCare.svg";
import External from "public/icons/external.svg";
import Facebook from "public/icons/facebook.svg";
import Funding from "public/icons/funding.svg";
import Governance from "public/icons/governance.svg";
import Hamburger from "public/icons/hamburger.svg";
import Help from "public/icons/help.svg";
import Holistic from "public/icons/holistic.svg";
import Info from "public/icons/info.svg";
import Instagram from "public/icons/instagram.svg";
import InvestmentMix from "public/icons/investmentMix.svg";
import Key from "public/icons/key.svg";
import Linkedin from "public/icons/linkedin.svg";
import Lock from "public/icons/lock.svg";
import LowCosts from "public/icons/lowCosts.svg";
import Mp3 from "public/icons/mp3.svg";
import NoFees from "public/icons/noFees.svg";
import NoLocKIn from "public/icons/noLockIn.svg";
import OnePercent from "public/icons/onePercent.svg";
import Pdf from "public/icons/pdf.svg";
import Phone from "public/icons/phone.svg";
import Profile from "public/icons/profile.svg";
import Quote from "public/icons/quote.svg";
import SaveMoney from "public/icons/saveMoney.svg";
import SaveTaxes from "public/icons/saveTaxes.svg";
import Search from "public/icons/search.svg";
import Secure from "public/icons/secure.svg";
import Share from "public/icons/share.svg";
import ShieldTick from "public/icons/shieldTick.svg";
import SocialResp from "public/icons/socialResp.svg";
import StarCircle from "public/icons/starCircle.svg";
import Strategy from "public/icons/strategy.svg";
import TickCircle from "public/icons/tickCircle.svg";
import TickCircleFilled from "public/icons/tickCircleFilled.svg";
import TickOutline from "public/icons/tickOutline.svg";
import Time from "public/icons/time.svg";
import TrendDown from "public/icons/trendDown.svg";
import TrendUp from "public/icons/trendUp.svg";
import Twitter from "public/icons/twitter.svg";
import WhatsApp from "public/icons/whatsapp.svg";
import ZeroPercent from "public/icons/zeroPercent.svg";
import { FC } from "react";

import styles from "src/core/icon.module.scss";

const icons = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  book: Book,
  bulbFilled: BulbFilled,
  chartUp: ChartUp,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  close: Close,
  closeCircle: CloseCircle,
  coinStack: CoinStack,
  customerSupport: CustomerSupport,
  download: Download,
  email: Email,
  envCare: EnvCare,
  external: External,
  facebook: Facebook,
  funding: Funding,
  governance: Governance,
  hamburger: Hamburger,
  help: Help,
  holistic: Holistic,
  info: Info,
  instagram: Instagram,
  investmentMix: InvestmentMix,
  key: Key,
  linkedin: Linkedin,
  lock: Lock,
  lowCosts: LowCosts,
  mp3: Mp3,
  noFees: NoFees,
  noLocKIn: NoLocKIn,
  onePercent: OnePercent,
  pdf: Pdf,
  phone: Phone,
  profile: Profile,
  quote: Quote,
  saveMoney: SaveMoney,
  saveTaxes: SaveTaxes,
  share: Share,
  secure: Secure,
  search: Search,
  shieldTick: ShieldTick,
  socialResp: SocialResp,
  starCircle: StarCircle,
  strategy: Strategy,
  tickCircle: TickCircle,
  tickCircleFilled: TickCircleFilled,
  tickOutline: TickOutline,
  time: Time,
  trendUp: TrendUp,
  trendDown: TrendDown,
  twitter: Twitter,
  whatsApp: WhatsApp,
  zeroPercent: ZeroPercent
};

export type IconType = keyof typeof icons;

interface IconProps {
  icon: IconType;
  className?: string;
}

export const Icon: FC<IconProps> = ({ icon, className }) => {
  const IconComponent = icons[icon];
  return <IconComponent aria-hidden="true" className={classNames(styles.icon, className)} />;
};
