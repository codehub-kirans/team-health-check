<script>
	import { enhance, applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	// import { Icon, Pencil } from 'svelte-hero-icons';
	import { TextInput } from '$lib/components';
	import { getImageURL } from '$lib/assets/js/utils.js';

	export let data;
	//console.log(data); // for debugging data
	let loading;

	$: loading = false;
	const showPreview = (event) => {
		const target = event.target;
		const files = target.files;

		if (files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			const preview = document.getElementById('avatar-preview');
			preview.src = src;
		}
	};

	const submitUpdateProfile = () => {
		loading = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};
</script>

<h3>Update Profile</h3>
<div>
	<form
		action="?/updateProfile"
		method="POST"
		class="container"
		enctype="multipart/form-data"
		use:enhance={submitUpdateProfile}
	>
		<div class="avatar-container">
			<h4 class="avatar-title">Profile Picture</h4>
			<label for="avatar">
				<div class="avatar primary">
					<img
						src={data.user?.avatar
							? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
							: `https://ui-avatars.com/api/?name=${data.user?.username}`}
						alt="user avatar"
						id="avatar-preview"
					/>
				</div>
			</label>
			<input
				type="file"
				name="avatar"
				id="avatar"
				value=""
				accept="image/*"
				hidden
				on:change={showPreview}
				disabled={loading}
			/>
		</div>

		<div />
		<TextInput id="username" label="Name" value={data?.user?.username} disabled={loading} />
		<TextInput id="team" label="Team" value={data?.user?.team} disabled={loading} />
		<div>
			<button type="submit" disabled={loading}> Update Profile </button>
		</div>
	</form>
</div>
