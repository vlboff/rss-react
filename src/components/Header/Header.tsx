import HeaderButtom from '../UI/HeaderButtom/HeaderButtom';

function Header() {
  return (
    <div>
      <HeaderButtom name={'Home'} link={'/'} />
      <HeaderButtom name={'About us'} link={'/about'} />
    </div>
  );
}

export default Header;
