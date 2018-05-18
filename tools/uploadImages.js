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
				url: 'https://scontent.fbeg2-1.fna.fbcdn.net/v/t34.18173-0/p280x280/16934202_258546177921564_1657735826_n.gif?_nc_cat=0&fallback=1&oh=38b77f672853da21c2b3598030f625d6&oe=5B01332D',
				is_reusable: true,
			},
		},
	},
};
(async () => {
	try {
		const attachment1 = await facebook.addAttachment(image1);
		log('GlassGif');
		log(attachment1);
	} catch (error) {
		log(error);
	}
})();
