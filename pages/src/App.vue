<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
	created() {
		this.$router.push('/home')
	}
}
</script>

<style></style>
