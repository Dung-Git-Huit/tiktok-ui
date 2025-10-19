import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { wrapper as WrapperPopper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(Attr) => (
                <div className={cx('menu-list')} tabIndex="-1" {...Attr}>
                    <WrapperPopper className={cx('menu-popper')}>{renderItems()}</WrapperPopper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
