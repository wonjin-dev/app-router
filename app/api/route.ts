import { type NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
	return NextResponse.json({
		status: 200,
		data: {
			name: 'wonjin',
		},
	});
};
