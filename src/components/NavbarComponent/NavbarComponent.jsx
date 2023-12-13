import { Checkbox, Rate } from "antd";
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from "./style";

function NavbarComponent() {
    const onChange = () => { };
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox style={{ marginLeft: 0 }} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option}/>
                            <span>{`Từ ${option} sao`}</span>
                        </div>
                    )
                })
                case 'price':
                    return options.map((option) => {
                        return (
                            <WrapperTextPrice>
                                {option}
                            </WrapperTextPrice>
                        )
                    })    
            default:
                return {}
        }
    }
    return (
        <div>
            <WrapperLabelText>label</WrapperLabelText>
            <WrapperContent>
                {renderContent('text', ['Tủ lạnh', 'TV', 'Điện thoại'])}
            </WrapperContent>
            {/* <WrapperContent>
                {renderContent('checkbox', [
                    { value: 'A', label: 'A' },
                    { value: 'B', label: 'B' },
                ])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('star', [3, 4, 5])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('price', ['Dưới 40', 'Trên 50'])}
            </WrapperContent> */}
        </div>
    );
}

export default NavbarComponent;