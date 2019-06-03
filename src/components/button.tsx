import {Component, Vue, Prop} from 'vue-property-decorator';
@Component
export default class MyButton extends Vue {
    @Prop() public size?: 'medium' | 'small' | 'mini';
    @Prop() public type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
    @Prop() public round?: boolean;
    @Prop() public circle?: boolean;
    @Prop() public loading?: boolean;
    @Prop() public disabled?: boolean;
    public tsxattrs!: {
        size?: 'medium' | 'small' | 'mini';
        type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
        round?: boolean;
        circle?: boolean;
        loading?: boolean;
        disabled?: boolean;
    };

    public render() {
        const className = ['my-button-default', 'my-button-medium'];
        let disabled = false;
        if (this.type) {
            className[0] = 'my-button-' + this.type;
        }
        if (this.type) {
            className[1] = 'my-button-' + this.size;
        }
        if (this.round) {
            className.push('my-button-round');
        }
        if (this.circle) {
            className.push('my-button-circle');
        }
        if (this.loading || this.disabled) {
            disabled = true;
        } else {
            disabled = false;
        }
        className.push('my-button');
        return <button class={className}>{this.$slots.default}</button>;
    }
}