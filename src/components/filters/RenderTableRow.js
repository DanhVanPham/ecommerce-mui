import {
    Stack, Avatar, TableRow,
    TableCell, Typography, useTheme, Checkbox
} from '@mui/material';
import Label from '../label/Label';


export default function RenderTableRow({ row, onSelectRow, selected, trans }) {
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';
    const { id, name, avatar, email, active } = row;

    return (
        <>
            <TableRow hover selected={selected}>
                <TableCell padding="checkbox">
                    <Checkbox checked={selected} onClick={onSelectRow} />
                </TableCell>

                <TableCell>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar sizes='small' alt={name} src={avatar} />
                        <Typography variant="body2">
                            {name}
                        </Typography>
                    </Stack>
                </TableCell>

                <TableCell align="right">{email}</TableCell>
                <TableCell align="right">
                    <Label variant={isLight ? 'soft' : 'filled'}
                        color={active ? 'success' : 'error'}>
                        {active ? trans("memberTable.active") : trans("memberTable.inactive")}
                    </Label>
                </TableCell>
            </TableRow>
        </>
    );
}