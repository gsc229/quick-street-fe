import React from 'react';
import footer from '../../styles/scss/footer.module.scss';

const Footer = () => {
	return (
		<div className={footer.footer_container}>
			{/* <div className={footer.footer_top_row}>
        <div className={footer.footer_top_row_column}>
          <p>Company</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className={footer.footer_top_row_column}>
          <p>Community</p>
          <p>Blogs</p>
          <p>Expert Directory</p>
          <p>Events</p>
          <p>Food/Vendor Glossary</p>
        </div>
        <div className={footer.footer_top_row_column}>
          <p>Product</p>
          <p>Mobile App</p>
          <p>Help</p>
          <p>Swag</p>
        </div>
      </div> */}
			<div className={footer.footer_bottom_row}>
				<div className={footer.footer_bottom_row_blank} />
				<div className={footer.footer_bottom_row_copyright}>
					<p>© 2019-2020 Quick Street, All rights reserved </p>
				</div>
				{/* <div className={footer.footer_bottom_row_social}>
        <Icon name='snapchat' width={24} fill={'#000'} />
        <Icon name='instagram' width={24} fill={'#000'} />
        <Icon name='youtube' width={27} height={20} fill={'#000'} />
        <Icon name='twitter' width={27} height={22} fill={'#000'} />
        <Icon name='facebook' width={27} fill={'#000'} />
        <Icon name='pinterest' width={27} fill={'#000'} />
      </div> */}
			</div>
		</div>
	);
};

export default Footer;
