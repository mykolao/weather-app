import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { customStyles } from 'mui/customStyles';

interface Props {
  isLoading: boolean;
  name: string;
  country: string;
  description: string;
  icon: string;
  onUpdate: () => void;
}

const headerStyles = customStyles({
  '& img': {
    width: 60,
    height: 60,
    margin: '-15px',
  },
});

export const DetailsHeader = (props: Props) => {
  const { description, icon, name, country, onUpdate, isLoading } =
    props;

  return (
    <CardHeader
      sx={headerStyles}
      avatar={
        <Tooltip title={description} placement="left">
          <img src={icon} alt={description} />
        </Tooltip>
      }
      title={`${name}, ${country}`}
      titleTypographyProps={{
        color: 'primary',
        variant: 'h4',
        component: 'h2',
      }}
      action={
        <IconButton onClick={onUpdate} disabled={isLoading}>
          <RefreshRoundedIcon />
        </IconButton>
      }
    />
  );
};
