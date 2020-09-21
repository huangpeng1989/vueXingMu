<template>

      <div>
           <ul class="mui-table-view">
			   <li class="mui-table-view-cell mui-media">
				   <router-link to="/">
						<img class="mui-media-object mui-pull-left" src="../../image/shuijiao.jpg">
						<div class="mui-media-body">
							木屋
							<p class="mui-ellipsis">
                                 <span>发表时间：2020-05-10</span>
                                <span>点击次数：0次</span>
                            </p>
						</div>
					</router-link >
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" class="">
						<img class="mui-media-object mui-pull-left" src="../../image/cbd.jpg">
						<div class="mui-media-body">
							CBD
							<p class="mui-ellipsis">
                                 <span>发表时间：2020-05-10</span>
                                <span>点击次数：0次</span>
                            </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newinfo/1'">
						<img class="mui-media-object mui-pull-left" src="../../image/shuijiao.jpg">
						<div class="mui-media-body">
							幸福
							<p class="mui-ellipsis">
                                <span>发表时间：2020-05-10</span>
                                <span>点击次数：0次</span>
                                
                            </p>
						</div>
					</router-link>
				</li>
				
	           <li class="mui-table-view-cell mui-media">
						<a href="javascript:;">
							<img class="mui-media-object mui-pull-left" src="../../image/muwu.jpg">
							<div class="mui-media-body">
								幸福
								<p class="mui-ellipsis">
									<span>发表时间：2020-05-10</span>
									<span>点击次数：0次</span>
								</p>
							</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media">
						<a href="javascript:;">
							<img class="mui-media-object mui-pull-left" src="../../image/shuijiao.jpg">
							<div class="mui-media-body">
								木屋
								<p class="mui-ellipsis">
									<span>发表时间：2020-05-10</span>
									<span>点击次数：0次</span>
								</p>
							</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media">
						<a href="javascript:;" class="">
							<img class="mui-media-object mui-pull-left" src="../../image/cbd.jpg">
							<div class="mui-media-body">
								CBD
								<p class="mui-ellipsis">
									<span>发表时间：2020-05-10</span>
									<span>点击次数：0次</span>
								</p>
							</div>
						</a>
					</li>

					<li class="mui-table-view-cell mui-media">
						<a href="javascript:;">
							<img class="mui-media-object mui-pull-left" src="../../image/muwu.jpg">
							<div class="mui-media-body">
								木屋
								<p class="mui-ellipsis">
									<span>发表时间：2020-05-10</span>
									<span>点击次数：0次</span>
								</p>
							</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media">
						<a href="javascript:;" class="">
							<img class="mui-media-object mui-pull-left" src="../../image/cbd.jpg">
							<div class="mui-media-body">
								CBD
								<p class="mui-ellipsis">
									<span>发表时间：2020-05-10</span>
									<span>点击次数：0次</span>
								</p>
							</div>
						</a>
					</li>

			</ul>
      </div>


</template>
<script>
  export default{
       data() {
            return {
               
            }
        }
       
   }
</script>
<style scoped>
    .mui-ellipsis{
           color:#226aff;
           display: flex;
           justify-content:space-between;
    }
</style>
