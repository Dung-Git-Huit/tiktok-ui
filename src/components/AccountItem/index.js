import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/2f693b50efa9ea406e5beec45ad85c92~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=38f9b2c8&x-expires=1758387600&x-signature=LA%2B%2FZhh7x5mJyp2RNvP2ahIf32g%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=my2"
                alt="Hoaa"
            ></Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AcountItem;
