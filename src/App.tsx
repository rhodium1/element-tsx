import {Vue, Component} from 'vue-property-decorator';
import Button from './components/button';
@Component({
  name: 'app',
  components: {
    Button,
  },
})
export default class App extends Vue {
  public render(){
    return <Button size='mini'/>
  }
}



