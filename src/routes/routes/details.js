import { getRouteById, getSchedulesByRoute } from '../../models/model.js';
import { getMonthAbbreviation } from '../../includes/helpers.js';

export default async (req, res) => {
    const { routeId } = req.params;
    const details = await getRouteById(routeId);
    details.schedules = await getSchedulesByRoute(routeId);

    // TODO: getCompleteRouteDetails instead

    const operatingMonths = details.operatingMonths.map(month => getMonthAbbreviation(month));

    res.render('routes/details', {
        title: 'Route Details',
        details,
        operatingMonths
    });
};