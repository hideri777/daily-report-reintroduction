<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('daily_reports', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->comment('ユーザーID');
            $table->dateTime('working_start')->comment('勤務開始時間');
            $table->dateTime('working_end')->comment('勤務終了時間');
            $table->text('mail_magazine')->nullable()->comment('メルマガ');
            $table->text('this_business_content')->nullable()->comment('今回の業務内容');
            $table->text('next_business_content')->nullable()->comment('次回の業務内容');
            $table->text('learning')->nullable()->comment('学び・気づいたこと');
            $table->text('others')->nullable()->comment('その他');
            $table->timestamps();
            $table->softDeletes();

            $table->comment('日報');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('daily_reports');
    }
};
