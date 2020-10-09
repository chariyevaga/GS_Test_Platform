<main>
      <div class="container">
         <div class="test-wrapper">
            <div class="test-title-wrapper">
               <div class="left">
                  <div class="test-img">
                     <img src="<?=URL."uploads/".$test_arr['TEST_IMAGE']?>" alt="" />
                  </div>
               </div>
               <div class="right">
                  <div class="test-title">
                     <h1>
                        <?=$test_arr['TEST_NAME']?>
                     </h1>
                  </div>
                  <div class="test-author-info">
                     <div class="test-author">
                        <div class="author-img">
                           <img src="<?=URL."uploads/".$test_arr['IMAGE']?>" alt="" />
                        </div>
                        <div class="author-name">
                           <h4><?=$test_arr['USER_NAME']?></h4>
                           <span>@<?=$test_arr['USER_NAME']?></span>
                        </div>
                     </div>
                     <!-- <div class="test-pin">
                        <span>Pin this test</span>
                     </div> -->
                  </div>
               </div>
            </div>

            <div class="test-info-wrapper">
               <div class="test-info">
                  <h3>Test information:</h3>
                  <div class="info">
                     <span>Language:</span>
                     <span><?=$test_arr['LANGUAGE']?></span>
                  </div>
                  <div class="info">
                     <span>Solved by:</span>
                     <span><?=$test_arr['SOLVING_COUNT']?> people</span>
                  </div>
                  <div class="info">
                     <span>Liked:</span>
                     <span><?=$test_arr['LIKE_COUNT']?> people</span>
                  </div>
                  <div class="info">
                     <span>Created date:</span>
                     <span><?=$test_arr['CREATE_TIME']?></span>
                  </div>
                  <div class="info">
                     <span>Description: </span>
                     <span><?=$test_arr['DESCRIPTION']?></span>
                  </div>
               </div>

               <div class="test-time">
                  <div class="block">
                     <h4>Given time:</h4>
                     <div class="time">
                        <span><?=$test_arr['GIVEN_TIME'].":00"?></span>
                     </div>
                  </div>
                  <!-- <div class="deadline"> -->
                     <div class="block inline-block">
                        <h4>Solve Date:</h4>
                        <div class="time">
                           <span><?=$test_arr['STARTING_TIME']?></span>-
                           <span><?=$test_arr['ENDING_TIME']?></span>
                        </div>
                     </div>
                  <!-- </div> -->
               </div>
            </div>

            <div class="test-bottom-wrapper">
               <div class="test-password">
                  <label for="password">Password: </label>
                  <input type="password" name="password" class="password" <?php echo $isPublic ? 'disabled placeholder="No password"':'placeholder="enter password"';?>>
                  <input type="hidden" id="test_id" value="<?=$test_id?>">
               </div>
               <div class="test-btns">
                  <button class="btn" id="back-button">Go Back</button>
                  <?php if($hasQuestions){ ?>
                  <button class="btn" id="start-button">Start</button>
                  <?php }else{
                     echo 'No questions';
                  } ?>
               </div>
            </div>
         </div>
      </div>
   </main>