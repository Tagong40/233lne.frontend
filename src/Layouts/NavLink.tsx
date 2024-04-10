import { Badge, Box, Flex, NavLink } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons';

export function NavLinks() {
    return (
        <Box sx={{ width: 240, height: 0, display: 'flex', justifyContent: 'center', marginTop: '5px', textAlign: 'center' }}>
            <NavLink label="Get A Store" icon={<IconHome2 size={16} stroke={1.5} />} noWrap={true} variant='light' />
            <NavLink label="Get A Store" icon={<IconHome2 size={16} stroke={1.5} />} noWrap={true} variant='light' />
            <NavLink label="Get A Store" icon={<IconHome2 size={16} stroke={1.5} />} noWrap={true} variant='light' />

        </Box>
    );
}