import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputComponent from "../InputComponent/InputComponent";

const ButtonInputSearch = (props) => {
  const { size, placeholder, textButton, type, bordered,  } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'flex', flex: 1 }}>
        <InputComponent 
            styleInput={{ borderRight: 'none', borderRadius: '4px 0 0 4px' }} 
            size={size} 
            bordered={bordered}
            placeholder={placeholder} 
        />
        <ButtonComponent 
            styleButton={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} 
            size={size} 
            type={type}
            textButton={textButton}
            >
        </ButtonComponent>
      </div>
    </div>
  );
}

export default ButtonInputSearch;
