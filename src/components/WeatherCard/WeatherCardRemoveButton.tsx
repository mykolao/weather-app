import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import { theme } from 'mui/theme';

interface Props {
  isVisible: boolean;
  onClick: () => void;
}

export const WeatherCardRemoveButton = (props: Props) => {
  const { isVisible, onClick } = props;

  return (
    <Slide
      in={isVisible}
      direction="left"
      timeout={250}
      easing={{ exit: theme.transitions.easing.easeIn }}
    >
      <IconButton onClick={onClick} color="primary" size="small">
        <DeleteOutlineIcon />
      </IconButton>
    </Slide>
  );
};
