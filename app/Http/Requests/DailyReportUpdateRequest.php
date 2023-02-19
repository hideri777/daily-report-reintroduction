<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class DailyReportUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'working_day' => [],
            'working_start' => [],
            'working_end' => [],
            'mail_magazine' => [],
            'this_business_content' => [],
            'next_business_content' => [],
            'learning' => [],
            'others' => [],
        ];
    }
}
