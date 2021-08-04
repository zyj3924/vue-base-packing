<template>
<div class="wrapp">
	<button
			@click="logContent"
		>
			log content
		</button>
	<v-pdf v-show="0" ref="myPdfComponent" src="http://qwzu8ykwg.hn-bkt.clouddn.com/%E6%97%A0%E9%94%A1%E5%8D%9A%E4%B8%96--CG2106300004--7%E6%9C%88%E5%90%8E%E5%A4%84%E7%90%86.pdf"></v-pdf>
</div>
</template>

<script>
//http://qwzu8ykwg.hn-bkt.clouddn.com/ASP20210525.pdf
import VPdf from 'vue-pdf'
import {Adapter, GetPDFInfo} from './js/getOrderInfo'
export default {
	components: {
		VPdf
	},
	methods: {
		logContent() {

			this.$refs.myPdfComponent.pdf.forEachPage(function(page) {

				return page.getTextContent()
				.then(function(content) {

					var text = content.items.map(item => item.str);
					console.log(text)
					const ad = new Adapter(new GetPDFInfo(text))
					ad.run()
				})
			});
		}
	}
}
</script>