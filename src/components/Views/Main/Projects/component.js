import ProjectItem from './ProjectItem/ProjectItem'
import ProjectNavbar from './ProjectNavbar/ProjectNavbar'
import ProjectViewer from "@/components/Views/Main/Projects/Viewer/ProjectViewer";

//websites
import ZawackaRdzen from "./libs/Website/ZawackaRdzen";
import PiekneDrewno from './libs/Website/PiekneDrewno'
import FotografiaPN from './libs/Website/FotografiaPN'
import Extemo from './libs/Website/Extemo'
import Login1 from './libs/Website/Login1'
import Login2 from './libs/Website/Login2'

//design
import Telebarek from './libs/Design/Telebarek'

//hosting
import Gtarena from "@/components/Views/Main/Projects/libs/Hosting/Gtarena";
import Lasergame from "@/components/Views/Main/Projects/libs/Hosting/Lasergame";
import Sejfomania from "@/components/Views/Main/Projects/libs/Hosting/Sejfomania";
import Konsmetalsklep from "@/components/Views/Main/Projects/libs/Hosting/Konsmetalsklep";


export default {
	components: {
		ProjectItem,
		ProjectNavbar,
		ProjectViewer,
		ZawackaRdzen,
		PiekneDrewno,
		FotografiaPN,
		Extemo,
		Login1,
		Login2,
		Telebarek,
		Gtarena,
		Lasergame,
		Sejfomania,
		Konsmetalsklep,
	},
	data() {
		return {
			item: Object,
			projectID: '',
			projectType: 'website',
			status: false,
		}
	},
	methods: {
		handleEvent(item, projectID) {
			this.status = !this.status
			this.projectID = projectID
			this.item = item
		},
		changeProjectType(type) {
			this.projectType = type
		}
	},
}
