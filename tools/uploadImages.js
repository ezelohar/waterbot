const Facebook = require('../core/libs/facebook');
const {
	log,
} = require('../core/libs/log');


const facebook = new Facebook();

const image1 = {
	message: {
		attachment: {
			type: 'image',
			payload: {
				url: 'https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.15752-9/32727637_2390164437675837_5162717128364654592_n.jpg?_nc_cat=0&oh=a68d4edd2f6a19fce3be09dfecd66431&oe=5B86A394',
				is_reusable: true,
			},
		},
	},
};
(async () => {
	try {
		const attachment1 = await facebook.addAttachment(image1);
		log('Cat');
		log(attachment1);
	} catch (error) {
		log(error);
	}
})();
