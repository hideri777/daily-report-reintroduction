<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class DailyReportList extends Controller
{
    /**
     * トップページの表示
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        $data = DB::table('daily_reports')->where(['user_id' => $request->user()->id])->orderByDesc('created_at')->get();
        return Inertia::render('DailyReportList/Index', [
            'data' => $data,
        ]);
    }
}
