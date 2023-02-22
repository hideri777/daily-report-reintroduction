<?php

namespace App\Http\Controllers;

use App\Http\Requests\DailyReportUpdateRequest;
use Illuminate\Http\Request;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\DailyReport;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class DailyReportController extends Controller
{
    /**
     * トップページの表示
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        return Inertia::render('DailyReport/Index', [
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(DailyReportUpdateRequest $request): RedirectResponse
    {
        $data = $request->all();

        $data['user_id']        = $request->user()->id;
        // TODO: ここのrequestの時間がおかしい utcになってる
        $data['working_start']  = new Carbon($request->input('working_start'));
        $data['working_end']    = new Carbon($request->input('working_end'));
        $dailyReport = new DailyReport();
        $dailyReport->create($data);
        return Redirect::route('daily_report');
    }

}
