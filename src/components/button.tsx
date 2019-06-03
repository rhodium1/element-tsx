import {Component, Vue, Prop} from 'vue-property-decorator';
@Component
export default class MyButton extends Vue{
    @Prop() public size?: 'medium' | 'small' | 'mini';

    public tsxattrs!: {
        size?: 'medium' | 'small' | 'mini';
    };

    public render() {
        return <button>{this.size}</button>;
    }
}