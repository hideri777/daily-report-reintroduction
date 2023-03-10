<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class TodayDailyReportController extends Controller
{
    /**
     * トップページの表示
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        $data = DB::table('daily_reports')->where(['user_id' => $request->user()->id])->latest('id')->first();
        return Inertia::render('TodayDailyReport/Index', [
            // 投げるならこんな感じ
            'data' => $data,
        ]);
    }
}
