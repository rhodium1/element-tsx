import {Vue, Component} from 'vue-property-decorator';
import Button from './components/button';
import ElementDemo from './views/element-demo.vue';
@Component({
  name: 'app',
  components: {
    Button,
    ElementDemo,
  },
})
export default class App extends Vue {
  public render() {
    
    return <div>
      <ElementDemo />
    </div>;
  }
}



