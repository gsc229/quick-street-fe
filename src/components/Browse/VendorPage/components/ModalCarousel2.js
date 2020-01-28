import React from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
const ModalCarousel2 = ({ images }) => {
	const [ index, setIndex ] = React.useState(0);

	return (
		<div>
			<div style={{ background: 'white', width: '100%', height: '100%' }}>
				<Gallery
					index={index}
					onRequestChange={(i) => {
						setIndex(i);
					}}
				>
					{images.map((img) => <GalleryImage objectFit="contain" key={img._id} src={img.secure_url} />)}
				</Gallery>
			</div>
		</div>
	);
};

export default ModalCarousel2;
