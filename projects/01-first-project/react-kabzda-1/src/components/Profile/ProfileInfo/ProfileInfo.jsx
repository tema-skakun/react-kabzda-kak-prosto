import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src='https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg' />
			</div>
			<div className={style.description}>
				ava + description
			</div>
		</div>
	)
}

export default ProfileInfo;