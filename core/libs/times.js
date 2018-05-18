function transformTimezoneToHours(timezone, wantedHours) {
	return wantedHours - timezone;
}

module.exports = {
	transformTimezoneToHours,
};

