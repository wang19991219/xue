<template>
      <!-- This section should be hidden by default and shown when there are todos -->
			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<!-- These are here just to show the structure of the list items -->
					<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
					<li v-for="item of data" :key="item.id" :class="{completed:item.completed}"> <!-- class =  "completed "  是用横线样式  状态管理  -->
						<div class="view">
							<input class="toggle" type="checkbox" v-model="item.completed">
							<label><span v-text="item.name"></span></label>
							<button class="destroy" @click="delete01(item.id)"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>
				</ul>
			</section>
</template>

<script>
export default {
    props:['data'],
    methods:{
        delete01(id){
            this.$store.commit('delete01',id);
        }
    }
}
</script>

<style scoped>

</style>